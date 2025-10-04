// components/StarRating.tsx
import { HiStar, HiOutlineStar } from 'react-icons/hi2';

interface StarRatingProps {
  rating: number;
  totalReviews?: number;
}

export default function StarRating({ rating, totalReviews }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <HiStar key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <HiOutlineStar key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      {totalReviews !== undefined && (
        <span className="text-gray-400 text-sm ml-2">({totalReviews} avaliações)</span>
      )}
    </div>
  );
}