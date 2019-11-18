import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    max-width: 20rem;
`;

export default function ImgMediaCard() {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={this.props.name}
          height={this.props.height}
          image={this.props.img}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.booth}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Based in {this.props.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
}