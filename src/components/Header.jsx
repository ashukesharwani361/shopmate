import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className='flex flex-wrap items-center gap-2'>
                    <span><img className='w-10' src={logo} alt="shopmate logo" /></span>
                    <span className="text-xl font-semibold">Shopping Cart</span>
                </div>
                <nav className="space-x-4">
                    <NavLink 
                        to="/" 
                        className={({isActive}) => 
                            `px-4 py-2 text-lg rounded-md transition-colors ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/cart" 
                        className={({isActive}) => 
                            `px-4 py-2 text-lg rounded-md transition-colors ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                        }
                    >
                        Cart
                    </NavLink>
                </nav>
                <div className="text-xl font-semibold">Cart: 2</div>
            </div>
        </header>
    )
}

// export default function Header() {
//     return (
//         <header className="bg-white shadow-md">
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex justify-between items-center">
//                     <div className="text-xl font-bold">Logo</div>
//                     <nav className="hidden md:flex space-x-4">
//                         <a href="/" className="hover:text-blue-600">Home</a>
//                         <a href="/products" className="hover:text-blue-600">Products</a>
//                         <a href="/cart" className="hover:text-blue-600">Cart</a>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }