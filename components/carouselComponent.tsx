"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import icon1 from '../assets/upArrow.svg'
import icon2 from '../assets/downArrow.svg'
import Image from "next/image";



export default function CarouselComponent() {
    const router = useRouter()
    const itemsData = [
        {
            date: 'اليوم 4 مارس 2024',
            percentageChange: '+2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 5 مارس 2024',
            percentageChange: '-2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 6 مارس 2024',
            percentageChange: '-2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 7 مارس 2024',
            percentageChange: '+2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 8 مارس 2024',
            percentageChange: '+2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 9 مارس 2024',
            percentageChange: '-2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 10 مارس 2024',
            percentageChange: '+2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 11 مارس 2024',
            percentageChange: '-2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 12 مارس 2024',
            percentageChange: '-2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },
        {
            date: 'اليوم 13 مارس 2024',
            percentageChange: '+2.3%',
            itemName: 'الدهب المحلي',
            value: '2.923 م.م',
        },

    ];

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {itemsData.map((item, index) => (
                    <CarouselItem key={index} className="basis-[1/16] md:basis-1/3 lg:basis-1/5">
                        <div className="bg-[#333] p-4 px-11 cursor-pointer rounded w-60" onClick={() => router.push('/prices')}>
                            <p className="text-sm text-right">{item.date}</p>
                            <div className="flex justify-center items-center my-2 gap-2 flex-row whitespace-nowrap">
                                <span className={`text-${item.percentageChange.includes('+') ? 'green-500' : 'red-500'}`}>{item.percentageChange}</span>
                                <p className="text-xl ">{item.itemName}</p>
                                <div className="flex justify-center items-center min-h-6 min-w-6">
                                    <span className="sr-only">{item.percentageChange.includes('+') ? 'Up Arrow for increasing value' : 'Down Arrow for decreasing value'}</span>
                                    <Image src={item.percentageChange.includes('+') ? icon1 : icon2} alt={item.percentageChange.includes('+') ? "up Arrow" : "down Arrow"} />
                                </div>
                            </div>
                            <p className="text-sm font-bold text-center">{item.value}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}


