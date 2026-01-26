import React from "react";
import { Star, User, ArrowRight } from "lucide-react";
import { useGetCourseData } from "../Hooks";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const courseData = useGetCourseData();

  return (
    <div className="py-14 px-8 bg-linear-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Explore Courses 🚀
            </h2>
            <p className="text-slate-500 mt-2 max-w-md">
              Pick up a new skill today from our top-rated instructors.
            </p>
          </div>

          <button className="text-blue-600 font-semibold text-sm hover:underline">
            View all categories →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {courseData?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-tr from-blue-50 via-transparent to-purple-50 pointer-events-none" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-blue-700 shadow">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow relative">
        <h3 className="font-extrabold text-slate-800 leading-snug mb-3 group-hover:text-blue-600 transition line-clamp-2">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
            <User size={12} className="text-blue-500" />
          </div>
          <span className="font-semibold">{course.instructor}</span>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg text-yellow-700 text-xs font-bold">
            <Star size={12} fill="currentColor" className="mr-1" />
            {course.rating}
          </div>

          <span className="text-slate-400 text-xs font-medium">
            ({course.studentsEnrolled.toLocaleString()} students)
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">
              Price
            </span>
            <div className="text-2xl font-black text-blue-600">
              ${course.price}
            </div>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductGrid;
// import React from "react";

// import { Star, User } from "lucide-react";
// import { useGetCourseData } from "../Hooks";
// import { Link } from "react-router-dom";

// const ProductGrid = () => {
//   const courseData = useGetCourseData();

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Courses</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {courseData &&
//           courseData.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;

// const CourseCard = ({ course }) => {
//   return (
//     <Link
//       to={`/course/${course.id}`}
//       className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow"
//     >
//       {/* Course Image */}
//       <img
//         src={course.image}
//         alt={course.title}
//         className="w-full h-40 object-cover"
//       />

//       <div className="p-4 flex flex-col flex-grow">
//         {/* Category Tag */}
//         <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
//           {course.category}
//         </span>

//         {/* Title */}
//         <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
//           {course.title}
//         </h3>

//         {/* Instructor */}
//         <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
//           <User size={14} />
//           <span>{course.instructor}</span>
//         </div>

//         {/* Rating */}
//         <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold mb-4">
//           <span>{course.rating}</span>
//           <Star size={14} fill="currentColor" />
//           <span className="text-gray-400 font-normal">
//             ({course.studentsEnrolled})
//           </span>
//         </div>

//         {/* Price and Action */}
//         <div className="mt-auto flex items-center justify-between">
//           <span className="text-xl font-bold text-gray-900">
//             ${course.price}
//           </span>
//           <button className="bg-blue-600 text-white px-3 py-1.5 rounded font-medium text-sm hover:bg-blue-700">
//             Explore
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };
