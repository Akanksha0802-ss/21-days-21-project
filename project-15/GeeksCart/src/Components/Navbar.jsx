import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link
            to="/"
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <div className="p-2 bg-blue-600 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-200">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600">
              Geeks<span className="text-blue-600 group-hover:text-slate-900">Cart</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-6">
            <Link
              to="/wishlist"
              className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-200"
            >
              <Heart size={18} className="group-hover:fill-current transition-colors" />
              <span className="hidden md:inline">Wishlist</span>
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-blue-600 rounded-full shadow-sm hover:shadow-blue-200 transition-all duration-200"
            >
              <ShoppingCart size={18} />
              <span className="hidden md:inline">Cart</span>
              
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white border-2 border-white">
                3
              </span>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;