"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coupon } from "@/lib/mock-data";
import { Clock, Flame, Percent, DollarSign } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

interface CouponCardProps {
  coupon: Coupon;
  variant?: "default" | "compact";
}

export function CouponCard({ coupon, variant = "default" }: CouponCardProps) {
  const discountDisplay = coupon.discountType === "percentage"
    ? `${coupon.discountValue}% OFF`
    : `$${coupon.discountValue} OFF`;

  const isExpiringSoon = new Date(coupon.expirationDate).getTime() - Date.now() < 3 * 24 * 60 * 60 * 1000;

  if (variant === "compact") {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Business Logo */}
            <div className="shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              <span className="text-lg font-bold text-muted-foreground">
                {coupon.business.name.charAt(0)}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {coupon.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{coupon.business.name}</p>
                </div>
                <Badge 
                  variant="secondary" 
                  className="shrink-0 bg-primary/10 text-primary font-semibold"
                >
                  {discountDisplay}
                </Badge>
              </div>

              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <CountdownTimer expirationDate={coupon.expirationDate} compact />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/20">
      {/* Discount Banner */}
      <div className="relative bg-primary px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary-foreground">
            {coupon.discountType === "percentage" ? (
              <Percent className="h-5 w-5" />
            ) : (
              <DollarSign className="h-5 w-5" />
            )}
            <span className="text-2xl font-bold">{discountDisplay}</span>
          </div>
          {coupon.isHotDeal && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              <Flame className="h-3 w-3 mr-1" /> Hot Deal
            </Badge>
          )}
        </div>
        {/* Decorative circles */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background" />
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background" />
      </div>

      <CardContent className="p-4">
        {/* Business Info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <span className="text-sm font-bold text-muted-foreground">
              {coupon.business.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <Link 
              href={`/business/${coupon.business.id}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {coupon.business.name}
            </Link>
          </div>
          <Badge variant="outline" className={coupon.category.color}>
            {coupon.category.name}
          </Badge>
        </div>

        {/* Coupon Title */}
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/coupons/${coupon.id}`}>{coupon.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {coupon.description}
        </p>

        {/* Expiration */}
        <div className={`flex items-center gap-2 text-sm mb-4 ${isExpiringSoon ? 'text-destructive' : 'text-muted-foreground'}`}>
          <Clock className="h-4 w-4" />
          <CountdownTimer expirationDate={coupon.expirationDate} />
        </div>

        {/* Usage Stats */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>{coupon.usageCount} used</span>
            <span>{Math.round((coupon.usageCount / coupon.totalCodes) * 100)}% claimed</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${(coupon.usageCount / coupon.totalCodes) * 100}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/coupons/${coupon.id}`} className="block">
          <Button className="w-full" variant="default">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
