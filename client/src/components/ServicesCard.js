import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImgMediaCard({ imgObj }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`services/${imgObj.id}`}>
          <CardMedia
            component="img"
            alt={imgObj.title}
            height="200"
            image={imgObj.image}
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: 'primary.main' }}
          >
            {imgObj.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`services/${imgObj.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
