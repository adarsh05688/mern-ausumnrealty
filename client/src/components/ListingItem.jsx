import { Link } from 'react-router-dom';
import { MdLocationOn} from 'react-icons/md';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
  FaSun,
  FaCalendar,
   
  
} from 'react-icons/fa';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[270px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
           
          <p className='text-slate-500 mt-2 font-semibold '>
          {listing.type === 'rent' && (
                <p >
                  Rent: {listing.regularPrice} ₹/month
                </p>
                
              )}
            
          </p>
          <p className='text-slate-500  font-semibold '>
          {listing.type === 'sell' && (
                <p >
                  Price: {listing.regularPrice} ₹
                </p>
                
              )}
            
          </p>

          <div className='text-red-700 flex gap-16'>
          <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaBed className='text-lg' />
               {listing.bhktype}
              </li>
          <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaChair className='text-lg' />
               {listing.furnished}
              </li>
        </div>
        </div>
      </Link>
    </div>
  );
}
