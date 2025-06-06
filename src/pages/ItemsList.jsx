export default function ItemsList({ }) {
    return (
        // <section className="flex justify-between mt-12 flex-wrap">
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1001.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1002.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1003.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1004.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1005.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col border border-gray-200 my-2">
        //         <div className="flex ">
        //             <img className="h-60 p-3 my-3" src="/assets/images/1006.png" />
        //         </div>
        //         <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
        //         <div className="flex justify-between my-4">
        //             <span className="text-lg font-semibold p-1.5" >$149</span>
        //             <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
        //         </div>
        //     </div>

        // </section>

        
        <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
                
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1001.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">Sony Wh-Ch510 Bluetooth Wireless</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$149</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1002.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">boAt Rockerz 450</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$49</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1003.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">JBL Tune 760NC</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$179</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1004.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">Logitech H111 Wired</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$39</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1005.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">APPLE Airpods Max Bluetooth Headset</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$199</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center">
                        <img className="h-60 object-contain p-3 my-3" src="/assets/images/1006.png" alt="Product" />
                    </div>
                    <div className="text-center text-lg p-3 font-semibold">ZEBRONICS Zeb-Thunder Wired</div>
                    <div className="flex justify-between my-4">
                        <span className="text-lg font-semibold p-1.5" >$29</span>
                        <span className="text-lg font-semibold bg-blue-600 hover:bg-blue-900 cursor-pointer rounded-lg text-white p-1.5" >Add To Cart</span>
                    </div>
                </div>
                
            </div>
        </section>
    );
}