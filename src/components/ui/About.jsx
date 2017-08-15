import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, odio in volutpat scelerisque, risus
      nibh faucibus neque, in sagittis turpis orci semper nisl. Vestibulum ut dolor eget metus dictum porta sit amet
      in ex. Fusce rutrum cursus lectus, et volutpat tellus cursus dignissim. Nulla consectetur, dolor viverra
      lobortis suscipit, enim nibh finibus libero, ac gravida purus augue at massa. Pellentesque imperdiet ligula nec
      mauris suscipit, in placerat augue auctor. Sed lacus ligula, cursus eget leo vitae, aliquam sagittis sapien.
      Integer venenatis gravida tellus, ut rhoncus arcu vestibulum a. Fusce dignissim mi sit amet nulla euismod
      rhoncus.
    </p>
    <p>Duis tristique purus tellus, vitae tempus enim rhoncus vel. Nunc magna ante, ultrices ut lectus ut, placerat
      vulputate sem.Mauris sed sodales massa, ut ultricies tortor. Aenean nibh tellus, dapibus id neque id, cursus
      dapibus ante. Morbi mattis vestibulum est at volutpat. Phasellus non elit ut massa venenatis tincidunt ut quis
      orci. Suspendisse potenti. Mauris elementum pulvinar venenatis. Phasellus maximus dui lacus, id rutrum lorem
      dictum vitae. Nullam sed scelerisque massa. Integer tristique id erat ac laoreet. Quisque ac tellus ornare,
      dapibus orci ac, tempus sapien. Donec dapibus hendrerit velit, et laoreet orci lacinia in. Pellentesque commodo
      augue rhoncus, bibendum mauris sit amet, hendrerit ex. Sed auctor tincidunt massa, sit amet sagittis arcu
      egestas accumsan. Donec semper mollis mauris, ut malesuada tortor.
    </p>
    <Helmet title='About'>
      <meta name="description" content="Helmet application" />
    </Helmet>
  </div>
);

export default About;
