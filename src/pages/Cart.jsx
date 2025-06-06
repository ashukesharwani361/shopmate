export default function Cart() {
    return (
        <section className="my-10 min-h-screen">
            <div>
                <h1 className="text-2xl font-bold text-center">Cart Items: 2</h1>
            </div>
            <div className="container mx-auto px-4 w-full">
                <div className="mt-8">
                    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4">
                        <div className="w-1/6">
                            <img className="w-24 h-24 object-contain" src="/assets/images/1001.png" alt="" />
                        </div>
                        <div className="w-2/6 text-lg">Sony Wh-Ch510 Bluetooth Wireless</div>
                        <div className="w-1/6 text-lg font-semibold">$149</div>
                        <div className="w-1/6">
                            <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">Remove</button>
                        </div>
                    </div>
                     <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4">
                        <div className="w-1/6">
                            <img className="w-24 h-24 object-contain" src="/assets/images/1002.png" alt="" />
                        </div>
                        <div className="w-2/6 text-lg">boAt Rockerz 450</div>
                        <div className="w-1/6 text-lg font-semibold">$49</div>
                        <div className="w-1/6">
                            <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}