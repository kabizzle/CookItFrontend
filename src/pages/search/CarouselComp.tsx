import { Button } from '@/components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { type CarouselApi } from '../../components/ui/carousel';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// interface Recipe{
//   title: string,
//   image: string,
//   time: number,
//   ingredients:string[],
//   description: string,
//   category: string,
//   id: string,
// }

// function to get the recipes # TODO change to suit our needs
// const getRecipes(): Promise<Recipe[]> {
//   const result =  await fetch
// }

export function RecipesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="flex flex-row items-center justify-between">
      <Button
        className="flex bg-transparent rounded-full w-12 h-12 border-black"
        onClick={() => api?.scrollTo(current - 1)}
      >
        <ArrowLeft className="size-6 text-black"></ArrowLeft>
      </Button>
      <div className="px-3">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent className="-ml-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/5">
                <div className="p-1">
                  <Card className="flex rounded-3xl aspect-square">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-l font-semibold">
                        Dish {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Button
        className="flex bg-transparent rounded-full w-12 h-12 border-black"
        onClick={() => api?.scrollTo(current + 1)}
      >
        <ArrowRight className="size-6 text-black"></ArrowRight>
      </Button>
    </div>
  );
}
