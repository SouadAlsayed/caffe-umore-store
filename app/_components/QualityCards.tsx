import { Coffee, icons, Layers2, MessageCircle, WandSparkles } from 'lucide-react';

const qualities = [
  {
    name: 'Active Community',
    desc: 'You can reach out whenever.',
    icon: <MessageCircle size={40} className="text-coffee-800 my-auto" />,
  },
  {
    name: 'Best Product Design',
    desc: 'We worried alot to make a great experience.',
    icon: <WandSparkles size={50} className="text-coffee-800 my-auto" />,
  },
  {
    name: 'Premium Quality',
    desc: 'A premium quality coffee is what our customers deserve.',
    icon: <Coffee size={70} className="text-coffee-800 my-auto" />,
  },
  {
    name: 'The Best Material',
    desc: 'Our products are made by premium materials.',
    icon: <Layers2 size={50} className="text-coffee-800 my-auto" />,
  },
];

function QualityCards() {
  return (
    <div className="grid grid-cols-2 gap-5 md:gap-10">
      {qualities.map((q) => (
        <div className="flex gap-5 md:gap-10" key={q.name}>
          {q.icon}
          <div>
            <h3 className="text-lg font-semibold">{q.name}</h3>
            <p className="mt-2 text-gray-600">{q.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QualityCards;
