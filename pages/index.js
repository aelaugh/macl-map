import { Canvas, useThree } from '@react-three/fiber';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { OrbitControls, Svg, fitCameraToObject } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default function Home() {
  const [selected, setSelected] = useState(null);
  return (
    <Layout>
      <div className='relative min-h-screen flex flex-col pb-24 pt-24 lg:pt-32'>
        <div className='absolute inset-0 -z-10 h-[670px]  bg-gradient-to-r from-[#C0F3F5]/70 to-[#A69AEB]/70' />
        <div className='absolute inset-x-0 top-0 -z-10 h-[670px] bg-gradient-to-t from-white to-transparent' />
        <Container className='relative flex flex-col flex-1 w-full'>
          <div className='flex flex-1 gap-6'>
            <div className='flex-1 rounded-4xl bg-white overflow-hidden shadow-lg shadow-gray-300/40 ring-1 ring-gray-100/80'>
              <Canvas>
                <Experience setSelected={setSelected} />
              </Canvas>
            </div>

            {selected && (
              <div className='max-w-md w-full rounded-4xl bg-white shadow-lg shadow-gray-300/40 ring-1 ring-gray-100/80 px-8 py-7 text-dark-gray'>
                <div className='flex flex-col gap-y-4 items-center'>
                  <h4 className='font-extrabold text-2xl'>{selected.name}</h4>
                  <div className='aspect-video  w-full rounded-3xl overflow-hidden'>
                    <img
                      src={selected.thumbnail}
                      alt={selected.name}
                      className='object-cover h-full w-full bg-gray-100 object-center'
                    />
                  </div>
                  <p className='uppercase font-extrabold rounded-xl border border-gray-500 px-3 py-2'>
                    {selected.type}
                  </p>
                  <p className='text-center text-dark-gray/75'>
                    {selected.description}
                  </p>
                  <ul className='text-dark-gray/75 divide-y divide-gray-100 text-center w-full'>
                    <li>
                      <a href='#' className='py-2 inline-block'>
                        {selected.phone}
                      </a>
                    </li>
                    <li>
                      <a href='#' className='py-2 inline-block'>
                        {selected.email}
                      </a>
                    </li>
                    <li>
                      <a href='#' className='py-2 inline-block'>
                        {selected.website}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

function Experience({ setSelected }) {
  return (
    <>
      <OrbitControls
        enableRotate={false}
        makeDefault
        mouseButtons={{
          LEFT: 2,
          MIDDLE: null,
          RIGHT: null,
        }}
      />

      {ELEMENTS.map(({ id, svg, position, details }) => (
        <Svg
          key={id}
          src={svg}
          position={[position.x, position.y, position.z]}
          scale={0.03}
          onClick={() => setSelected(details)}
        />
      ))}
    </>
  );
}

const ELEMENTS = [
  {
    id: 'thai-express',
    svg: '/svg/thai-express.svg',
    position: {
      x: 8.42,
      y: 0,
      z: 0,
    },
    details: {
      name: 'Thai Express',
      description:
        "Experience a fusion of traditional Thai flavors and contemporary twists at Thai Express. From aromatic curries to zesty stir-fries, each dish is crafted with fresh ingredients and authentic spices. Immerse yourself in the vibrant ambiance as you embark on a culinary journey through Thailand's rich cuisine.",
      thumbnail: 'https://source.unsplash.com/FlYgsQGoxhA/800x600',
      type: 'Food and Beverage',
      location: 'Level 1',
      phone: '+960 1234567',
      email: 'thai@express.com',
      website: 'https://thaiexpress.com/',
    },
  },
  {
    id: 'burger-king',
    svg: '/svg/burger-king.svg',
    position: {
      x: 4,
      y: 0,
      z: 0,
    },
    details: {
      name: 'Burger King',
      description:
        "Satisfy your cravings for juicy burgers at Burger King. Known for their flame-grilled patties, they offer a variety of mouthwatering options with premium ingredients. Whether you prefer classic cheeseburgers or adventurous specialty sandwiches, their menu caters to every burger lover's taste.",
      thumbnail: 'https://source.unsplash.com/jh5XyK4Rr3Y/800x600',
      type: 'Food and Beverage',
      location: 'Level 1',
      phone: '+960 1234567',
      email: 'king@burgerking.com',
      website: 'https://www.burgerking.com/',
    },
  },
  {
    id: 'coffee-club',
    svg: '/svg/coffee-club.svg',
    position: {
      x: 4,
      y: -0.77,
      z: 0,
    },
    details: {
      name: 'Coffee Club',
      description:
        'Escape to Coffee Club, a charming café where coffee is an art. Sip on expertly brewed blends, accompanied by a delectable range of breakfast items, sandwiches, and decadent desserts. The cozy atmosphere and friendly service make it the perfect spot to unwind and enjoy a cup of perfection.',
      thumbnail: 'https://source.unsplash.com/XtUd5SiX464/800x600',
      type: 'Food and Beverage',
      location: 'Level 1',
      phone: '+960 1234567',
      email: 'coffee@club.com',
      website: 'https://www.coffeeclub.com.sg/',
    },
  },
  {
    id: 'common-area',
    svg: '/svg/common-area.svg',
    position: {
      x: 4,
      y: -2.38,
      z: 0,
    },
    details: {
      name: 'Common Area',
      description:
        'The common area of the airport is a bustling hub where travelers converge. It offers a wide range of amenities, including shops, restaurants, and lounges. Passengers can relax, grab a bite to eat, shop for souvenirs, or catch up on work while waiting for their flights. The atmosphere is filled with anticipation, with people from all walks of life coming together in a dynamic and lively setting.',
      thumbnail: 'https://source.unsplash.com/jVvtCCycgcQ/800x600',
      type: 'Common Area',
      location: 'Level 1',
      phone: '+960 1234567',
      email: 'common@area.com',
      website: '',
    },
  },
  {
    id: 'dairy-queen',
    svg: '/svg/dairy-queen.svg',
    position: {
      x: 4,
      y: -3.8,
      z: 0,
    },
    details: {
      name: 'Dairy Queen',
      description:
        'Treat yourself to a delightful experience at Dairy Queen, where creamy soft-serve ice cream takes center stage. Indulge in a wide array of tempting flavors, topped with mouthwatering sauces and toppings. Alongside their iconic treats, Dairy Queen also serves up savory burgers and thirst-quenching beverages, ensuring a satisfying visit for all.',
      thumbnail: 'https://source.unsplash.com/0GDN7NSoYRI/800x600',
      type: 'Food and Beverage',
      location: 'Level 1',
      phone: '+960 1234567',
      email: 'dairy@queen.com',
      website: 'https://www.dairyqueen.com/',
    },
  },
];
