import React from 'react';
import { AiFillThunderbolt, AiOutlineClockCircle, AiOutlineUser, AiOutlineBook, AiOutlineStar, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';

async function CourseDetailsPage({ params }:{params:Promise<{courseId:string}>}) {
    const { courseId } = await params;

    const res = await fetch(`http://localhost:5000/courses/${courseId}`);
    const course = await res.json();

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Course not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            {/* Header with Back Button */}
            <div className="container mx-auto px-4 mb-8">
                <a 
                    href="/courses"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors"
                >
                    <BsArrowLeft className="text-lg" />
                    Back to Courses
                </a>
                
                {/* Limited Time Badge */}
                {course.isLimitedTime && (
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <AiFillThunderbolt className="text-yellow-500" />
                        Limited Time Offer
                    </div>
                )}
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - 2/3 width */}
                    <div className="lg:col-span-2">
                        {/* Course Header */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Thumbnail */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full md:w-80 h-48 object-cover rounded-xl shadow-md"
                                    />
                                </div>
                                
                                {/* Course Info */}
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                        {course.title}
                                    </h1>
                                    
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {course.description}
                                    </p>

                                    {/* Meta Information */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <AiOutlineUser className="text-blue-600" />
                                            <span className="text-sm text-gray-600">{course.instructor}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AiOutlineBook className="text-green-600" />
                                            <span className="text-sm text-gray-600">{course.lessons} Lessons</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AiOutlineClockCircle className="text-purple-600" />
                                            <span className="text-sm text-gray-600">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <AiOutlineStar className="text-yellow-500" />
                                            <span className="text-sm text-gray-600">{course.rating} Rating</span>
                                        </div>
                                    </div>

                                    {/* Level & Category */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            course.level.includes('Beginner') ? 'bg-green-100 text-green-800' :
                                            course.level.includes('Intermediate') ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {course.level}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                                            {course.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Content */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            {/* Overview Checkboxes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
                                    course.overview?.curriculum ? 'border-green-200 bg-green-50' : 'border-gray-200'
                                }`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                        course.overview?.curriculum ? 'bg-green-500' : 'bg-gray-300'
                                    }`}>
                                        {course.overview?.curriculum && (
                                            <AiOutlineCheckCircle className="text-white text-sm" />
                                        )}
                                    </div>
                                    <span className="font-medium">Curriculum</span>
                                </div>
                                <div className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
                                    course.overview?.instructor ? 'border-green-200 bg-green-50' : 'border-gray-200'
                                }`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                        course.overview?.instructor ? 'bg-green-500' : 'bg-gray-300'
                                    }`}>
                                        {course.overview?.instructor && (
                                            <AiOutlineCheckCircle className="text-white text-sm" />
                                        )}
                                    </div>
                                    <span className="font-medium">Instructor</span>
                                </div>
                                <div className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
                                    course.overview?.student ? 'border-green-200 bg-green-50' : 'border-gray-200'
                                }`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                        course.overview?.student ? 'bg-green-500' : 'bg-gray-300'
                                    }`}>
                                        {course.overview?.student && (
                                            <AiOutlineCheckCircle className="text-white text-sm" />
                                        )}
                                    </div>
                                    <span className="font-medium">Student</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {course.longDescription || course.description}
                                </p>
                            </div>

                            {/* What You'll Learn */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">What Will You Learn?</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {course.whatYouLearn || "Master essential skills and gain practical knowledge through hands-on projects and expert guidance."}
                                </p>
                            </div>

                            {/* Course Information */}
                            {course.courseInformation && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Course Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {course.courseInformation.map((info:any, index:any) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                <AiOutlineCheckCircle className="text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{info}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar - 1/3 width */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="text-center mb-6">
                                    {course.price > course.discountPrice && (
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-2xl font-bold text-gray-900">${course.discountPrice}</span>
                                            <span className="text-lg text-gray-500 line-through">${course.price}</span>
                                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                                                {Math.round(((course.price - course.discountPrice) / course.price) * 100)}% OFF
                                            </span>
                                        </div>
                                    )}
                                    {!(course.price > course.discountPrice) && (
                                        <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                                        ADD TO CART
                                    </button>
                                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl">
                                        BUY NOW
                                    </button>
                                </div>

                                {/* Guarantee */}
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-500">30-Day Money-Back Guarantee</p>
                                </div>
                            </div>

                            {/* Course Features */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">This Course Includes</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <AiOutlineBook className="text-green-500" />
                                        <span className="text-gray-700">{course.lessons} on-demand lessons</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <AiOutlineClockCircle className="text-blue-500" />
                                        <span className="text-gray-700">{course.duration} access</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <AiOutlineUser className="text-purple-500" />
                                        <span className="text-gray-700">Full lifetime access</span>
                                    </div>
                                    {course.hasShortTitleExam && (
                                        <div className="flex items-center gap-3">
                                            <AiOutlineCheckCircle className="text-orange-500" />
                                            <span className="text-gray-700">Short Title Exam Included</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Instructor:</span>
                                        <span className="font-medium text-gray-900">{course.instructor}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Level:</span>
                                        <span className="font-medium text-gray-900">{course.level}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="font-medium text-gray-900">{course.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Rating:</span>
                                        <span className="font-medium text-gray-900">{course.rating} ⭐</span>
                                    </div>
                                    {course.academy && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Academy:</span>
                                            <span className="font-medium text-gray-900">{course.academy}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsPage;