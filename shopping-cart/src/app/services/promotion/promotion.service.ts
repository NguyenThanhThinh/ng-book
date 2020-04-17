import { PromotionCode } from './../../promotion-code/promotion-code';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  promotions: PromotionCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];
  applyPromotionCode(code: string): number {
    const promotionCode = this.promotions.find(
      n => n.code === code
    );
    if (promotionCode) return promotionCode.discountPercent;
    return 0;
  }
}
