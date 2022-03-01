import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Container, Tooltip, Typography } from '@mui/material';
import moment from 'moment';
import UseAuth from '../../Hooks/UseAuth';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Finds() {
  const {user} = UseAuth();
  console.log(user);
  const UserPhoto = user.photoURL;
  return (
    <>
    <>
    <Typography variant="h2" gutterBottom component="div" sx={{fontFamily:'"Playfair Display",serif', color: '#303030', fontWeight: '700', marginTop: '150px'}}>
        Go Exotic Places
      </Typography>
      <Typography variant="body2" gutterBottom  sx={{color: '#818181;'}}>
      When it comes to exploring exotic places, the choices are numerous. Whether you like <br /> peaceful destinations or vibrant landscapes, we have offers for you.
      </Typography>
    </>
    <Container sx={{padding: '30px',marginTop:'30px'}}>
    <ImageList
     
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
     
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          <Typography
            variant='body2'
            component='span'
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: 'white',
              padding: '5px',
              background: 'rgba(0,0,0,.3)',
              borderTopRightRadius: 8
            }}
          >
            {moment(new Date() - 500 * 60 * 60).fromNow()}
          </Typography>
          
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
    </>
  );
}


const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/18/06/01/sunset-6878021_960_720.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_960_720.jpg',
    title: 'Burger',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/12/10/10/53/architecture-4685608_960_720.jpg',
    title: 'Camera',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/03/11/19/04/desert-3217765_960_720.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_960_720.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/10/05/07/29/woman-5628426_960_720.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_960_720.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/17/07/47/travel-2650303_960_720.jpg',
    title: 'Fern',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/07/18/17/42/waterfall-6476205_960_720.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/29/19/02/peter-6902548_960_720.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/06/05/18/05/landscape-4254269_960_720.jpg',
    title: 'Bike',
    cols: 2,
  },
];

// // <Tooltip 
// title = {user?.displayName}
// sx={{
//   position: 'absolute',
//   right: '3px',
//   bottom: '3px',

// }}
// >
// <Avatar src={UserPhoto} />
// </Tooltip>