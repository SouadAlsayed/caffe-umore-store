import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Regular', image: '/c1.jpg' },
  { name: 'Espresso', image: '/c2.jpg' },
  { name: 'Italian', image: '/c3.jpg' },
  { name: 'Arabic', image: '/c4.jpg' },
  { name: 'Chocolate', image: '/c5.jpg' },
  { name: 'Milk', image: '/c6.jpg' },
  { name: 'Caffeine-free', image: '/c7.jpg' },
  { name: 'Fruit', image: '/c8.jpg' },
];

function CategoryCards({ fontFamily }: { fontFamily: string }) {
  return (
    <div
      className={`${fontFamily} grid h-full w-full grid-cols-2 gap-1 px-3 text-lg md:grid-cols-4`}
    >
      {categories.map((c) => (
        <div className="group relative cursor-pointer overflow-hidden rounded-xl" key={c.name}>
          <Link href="">
            <Image
              src={c.image}
              alt=""
              fill
              quality={100}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="absolute inset-0 bg-black/60" />
          <h3 className="absolute inset-0 flex items-center justify-center text-lg text-white">
            {c.name} Coffee
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;
