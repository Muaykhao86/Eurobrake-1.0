import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import ServerModal from './ExhibitorsPop';
import CircularProgress from '@material-ui/core/CircularProgress';


const StyledCard = styled(Card)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 1rem;
  width: 27rem;
  min-height: 37rem;
  padding: 0 1rem;

&&.MuiPaper-elevation1 {
  box-shadow: 0px 5px 15px 3px rgba(0,0,0,0.2), 0px 5px 5px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
   
}

`;

const StyledContent = styled(CardContent)`
  align-self: center;
  flex-basis: 60%;
  flex: 1;
  /* max-width: ${props => props.theme.maxWidth}; */
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0;
`;

const Company = styled.h2`
  font-family: ${props => props.theme.MPSemibold};
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  /* padding: 0 2rem; */
  text-align: center;
  /* align-self: center; */
`;

const Booth = styled.h1`
  font-family: ${props => props.theme.MPBlack};
  color: ${props => props.theme.primary};
  font-size: 4.2rem;
  align-self: center;

`;


const Country = styled.p`
  font-family: ${props => props.theme.MPLight};
  color: ${props => props.theme.primary};
  font-size: 1.4rem;
  text-align: end;
  align-self: flex-end;

`;

const StyledMedia = styled(CardMedia)`  
&&{
width: 50%;

}
`; 

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-basis: 40%;
  `;

const StyledBottom = styled(CardActions)`
display: flex;
justify-content: space-between;
width: 100%;

.MuiCardActions-root {
  padding: .8rem 0;
}
/* flex: 1; */


`;


export default class ExhibitorCard extends React.Component {
  constructor(props) {
    super(props);
    
  }
  

//Image handler Component
addDefaultSrc = (e) => {
  e.target.src = "/images/logo.png"
  e.target.onerror = null;
  return
}
 render(){
const {
  name,
  image,
  height,
  booth,
  country,
  summary,
  website,
  phone,
  email
} = this.props;
  return (
    <StyledCard>
      <StyledContainer className="">

     {image ? 
      <StyledMedia
        component="img"
        alt={name}
        src={image}
        onError={this.addDefaultSrc} 
        title={name}
      />
      : 
      <CircularProgress />
           }
      </StyledContainer>
      <StyledContent>
        <Company>
          {name}
        </Company>
        <Booth >
          #{booth}
        </Booth>
      </StyledContent>
        <StyledBottom>
          <ServerModal
            name={name}
            img={image}
            booth={booth}
            country={country}
            height={height}
            summary={summary}
            website={website}
            phone={phone}
            email={email}

          />
          <Country >
            Based in {country === 'United States' ? 'US' : 
                      country === 'United Kingdom' ? 'UK' :
                      country}
          </Country>
        </StyledBottom>
    </StyledCard>
  );
}
}
{/* <CardActionArea> */ }
{/* </CardActionArea>  */ }