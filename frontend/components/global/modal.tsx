'use client';

import React, { useEffect, useState } from 'react';
import eventEmitter, { EVENT_NAMES } from '@/utils/event';
import { GlobalDialogProps } from '@/types/global';

const GlobalDialog: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogProps, setDialogProps] = useState<GlobalDialogProps>({});

    const handleOpen = (props?: GlobalDialogProps) => {
        setDialogProps(props || {});
        if (!props?.hasOwnProperty('display')) {
            setIsOpen(true);
        } else {
            setIsOpen(props.display ?? false);
        }
    };

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        eventEmitter.on(EVENT_NAMES.MODAL, handleOpen);
        return () => {
            eventEmitter.off(EVENT_NAMES.MODAL, handleOpen);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black opacity-40 backdrop-blur-sm transition-opacity duration-300 opacity-0 animate-fade-in"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-xl z-50 w-full mx-4 overflow-auto max-h-[90vh] relative transform transition-all duration-300 scale-90 opacity-0 animate-scale-in">
                {/* Header */}
                {dialogProps.title && (
                    <div className="text-lg font-semibold mb-4">{dialogProps.title}</div>
                )}

                {/* Body */}
                <div className="">
                    {dialogProps.body ? dialogProps.body : null}
                    {dialogProps.message && (
                        <div className="text-gray-700">{dialogProps.message}</div>
                    )}
                </div>

                {/* Footer / Buttons */}
                <div className="flex justify-end space-x-2">
                    {dialogProps.onConfirm && (
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={() => {
                                dialogProps.onConfirm?.(handleClose);
                                handleClose();
                            }}
                        >
                            OK
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.25s forwards;
                }

                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in {
                    animation: scale-in 0.25s forwards;
                }
            `}</style>
        </div>
    );
};

export default GlobalDialog;
