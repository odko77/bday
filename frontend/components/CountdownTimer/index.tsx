"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  expirationDate: string;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

export function CountdownTimer({ expirationDate, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(expirationDate).getTime() - Date.now();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expirationDate]);

  if (timeLeft.expired) {
    return <span className="text-destructive font-medium">Expired</span>;
  }

  if (compact) {
    if (timeLeft.days > 0) {
      return <span>{timeLeft.days}d {timeLeft.hours}h left</span>;
    }
    if (timeLeft.hours > 0) {
      return <span className="text-destructive">{timeLeft.hours}h {timeLeft.minutes}m left</span>;
    }
    return <span className="text-destructive">{timeLeft.minutes}m {timeLeft.seconds}s left</span>;
  }

  if (timeLeft.days > 7) {
    return <span>Expires in {timeLeft.days} days</span>;
  }

  if (timeLeft.days > 0) {
    return (
      <span>
        Expires in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    );
  }

  return (
    <span className="font-medium">
      Expires in {String(timeLeft.hours).padStart(2, "0")}:
      {String(timeLeft.minutes).padStart(2, "0")}:
      {String(timeLeft.seconds).padStart(2, "0")}
    </span>
  );
}
