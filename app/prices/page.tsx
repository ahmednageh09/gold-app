"use client"
import dynamic from 'next/dynamic';

// Dynamically import the TradingView widget component without SSR
const TradingViewWidgetNoSSR = dynamic(
    () => import('react-ts-tradingview-widgets').then((mod) => mod.AdvancedRealTimeChart),
    { ssr: false }
);

function TradingViewWidget() {
    const data = [
        { date: '2/4/2024', lastPrice: 0.255, change: '-2.58%' },
        { date: '2/4/2024', lastPrice: 0.319, change: '+5.60%' },
        { date: '2/4/2024', lastPrice: 0.233, change: '+5.05%' },
        { date: '2/4/2024', lastPrice: 0.255, change: '-2.58%' },
        { date: '2/4/2024', lastPrice: 0.319, change: '+5.60%' },
        { date: '2/4/2024', lastPrice: 0.233, change: '+5.05%' },
        { date: '2/4/2024', lastPrice: 0.255, change: '-2.58%' },
        { date: '2/4/2024', lastPrice: 0.319, change: '+5.60%' },
        { date: '2/4/2024', lastPrice: 0.233, change: '+5.05%' },
    ];

    return (
        <div className='container my-40 '>
            <div className='flex flex-col justify-center md:flex-row gap-8'>
                <div className='h-[600px] w-[100%] '>
                    <TradingViewWidgetNoSSR
                        autosize
                        symbol="OANDA:XAUUSD"
                        interval="60"
                        timezone="Africa/Cairo"
                        theme="dark"
                        style="1"
                        locale="en"
                        enable_publishing={true}
                        hide_side_toolbar={false}
                        allow_symbol_change={true}
                        details={true}
                        calendar={false}
                    />
                </div>
                {/* prices */}
                <div className='flex justify-center h-fit p-5 bg-[#131722] border-[0.5px] border-[#343843] text-white text-center'>
                    <div className="flex w-full flex-col">
                        <div className="flex flex-row w-full items-center justify-between gap-7 sm:space-x-10 px-4 py-2 text-black rounded-[5px] bg-gray-200 text-nowrap">
                            <span className="text-sm font-semibold">Date</span>
                            <span className="text-sm font-semibold">Last Price</span>
                            <span className="text-sm font-semibold">Change</span>
                        </div>


                        <div className="flex flex-col divide-y">
                            {data.map((item, index) => (
                                <div key={index} className={'flex items-center justify-between px-2 py-2'}>
                                    <div className="flex flex-row w-full items-center justify-between gap-9 sm:space-x-10 px-4 py-2 text-nowrap">
                                        <span>{item.date}</span>
                                        <span>{item.lastPrice}</span>
                                        <div className={`p-1 rounded-[2px] text-black ${item.change.startsWith('-') ? 'bg-[#e73443]' : 'bg-[#09927c]'}`}>{item.change}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TradingViewWidget;
