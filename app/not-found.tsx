import Link from 'next/link'
import { Heart, Home, ArrowLeft, Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#F5F0E8] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative element */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              <Heart className="w-16 h-16 text-[#A65D45] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <Frown className="w-8 h-8 text-[#1E3A3F] absolute bottom-0 right-0" />
            </div>
          </div>

          {/* Error code */}
          <h1 className="text-8xl sm:text-9xl font-serif font-bold text-[#1E3A3F] mb-4 leading-none">
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-3xl sm:text-4xl font-serif text-[#A65D45] mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg sm:text-xl text-[#1E3A3F]/60 mb-8 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            But don't worry, our mission continues.
          </p>


          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-[#A65D45] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
            <Link 
              href="/programs" 
              className="border-2 border-[#1E3A3F] text-[#1E3A3F] px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-[#1E3A3F] hover:text-white transition-colors text-sm sm:text-base"
            >
              View Our Programs
            </Link>
          </div>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-2 h-2 rounded-full bg-[#A65D45]"></span>
            <span className="w-2 h-2 rounded-full bg-[#1E3A3F]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E5D7C1]"></span>
          </div>
        </div>
      </div>
    </div>
  )
}