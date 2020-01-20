import React from 'react';
import styled from 'styled-components';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ExpansionPanel = styled(MuiExpansionPanel)`
    border: '1px solid rgba(0, 0, 0, .125)';
    box-shadow: 0;
    border-top: 2px solid ${props => props.theme.primary};
    
    &:last-child{
    border-bottom: 2px solid ${props => props.theme.primary};
    }

    &::before{
    background-color: transparent;
    }

    .table_summary-box{
      display: flex;
    }

    .table-icon{
      font-size: 5rem;
      color: ${props => props.theme.primary};
    }

    .table-heading{
      color: ${props => props.theme.primary};
      font-family: ${props => props.theme.MPSemibold};
      font-size: 3rem;
      margin: 0 2rem;

    }

    .table-sub{
      color: ${props => props.theme.primary};
      font-family: ${props => props.theme.MPLightIt};
      font-size: 3rem;
      margin-left: 7rem;

    }
`;

const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
.MuiExpansionPanelSummary-content{
  flex-flow: column;
}

    &&{
    padding: 0;
    margin-bottom: -1;
    min-height: 56;
    }`;

const ExpansionPanelDetails = styled(MuiExpansionPanelDetails)`
 
    padding: 2rem;
  
`;

const StyledCell = styled(TableCell)`
  &&.MuiTableCell-root {
    border-bottom: 0;
    padding: .5rem;
    }

  &&.StyledCell-title{
    font-family: ${props => props.theme.MPLight};
    font-size: 2rem;
    color: ${props => props.theme.primary};
  }

  &&.StyledCell-data{
    font-family: ${props => props.theme.MPBold};
     font-size: 2rem;
    color: ${props => props.theme.primary};
  }
  &&.StyledCell-sesh{
    font-family: ${props => props.theme.MPLight};
     font-size: 2rem;
    color: ${props => props.theme.primary};
  }


`;

export default function TechExpandTable() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function createData(time, session, sessionName) {
    return { time, session, sessionName };
  }

  

  const tuesday = [
    createData('10:00–12:00', 'Student Introductory Lecture', ''),
    createData('10:30–12:30', 'Registration and light lunch', ''),
    createData('13:00–13:15', 'Opening Ceremony', ''),
    createData('14:00–14:20', 'Break', ''),
    createData('14:40–16:00', 'Technical Sessions', ''),
    createData('', '', 'Brake Components in Transition'),
    createData('', '', 'Creep-groan Noise'),
    createData('', '', 'Electrification of Commercial Vehicles and Effects on Pneumatic Braking Systems'),
    createData('16:00–16:20',  'Break', ''),
    createData('16:20–18:00', 'Technical Sessions', ''),
     createData('', '', 'Fundamentals: Big Data Analytics and Uncertainty'),
    createData('', '', 'Innovative Raw Materials'),
    createData('', '', 'Innovative Technologies and Functions in Electronic Brake Systems'),
    createData('18:00–19:30',  'Welcome Reception', ''),

  ];
  const wednesday = [
    createData('08:30–10:10', 'Technical Sessions', ''),
     createData('', '', 'New Brake Control Strategies'),
    createData('', '', 'Fundamentals: Friction, Wear and Brake Emissions'),
    createData('', '', 'Squeal Noise: Simulation and Test Methods'),
    createData('10:10–10:40', 'Break', ''),
    createData('10:40–12:20', 'Technical Sessions', ''),
     createData('', '', 'Brake Emissions: Macroscopic Level Part 1'),
    createData('', '', 'Friction Induced Vibrations'),
    createData('',  '','Innovative Brake System Design Approaches'),
    createData('12:20–13:50', 'Lunch', ''),
    createData('12:30–13:30', 'Open Seminar', ''),
    createData('13:50–15:30', 'Technical Sessions', ''),
     createData('', '', 'Advanced Formulations'),
    createData('', '', 'Brake Emissions: Macroscopic Level Part 2'),
    createData('', '', 'Poster Session'),
    createData('15:30–16:00', 'Break', ''),
    createData('16:00–17:40', 'Technical Sessions', ''),
     createData('', '', 'Brake Emissions: Microscopic Level'),
    createData('', '', 'Long Life Friction Materials: Opportunities and Challenges'),
    createData('', '', 'NVH challenges of Brakes in Electric Vehicles'),
    createData('18:00–19:00', 'Drinks Reception', ''),
    createData('19:00–22:30', 'EuroBrake Dinner including Awards', ''),
   
  ];
  const thursday = [
    createData('08:30–10:10', 'Technical Sessions', ''),
     createData('', '',  'Environmental Friendly Formulations'),
    createData('', '',  'Progressive Disc Coatings'),
    createData('', '',  'Virtual Development of Electronic Brake Systems'),
    createData('10:10–10:40', 'Break', ''),
    createData('10:40–12:20', 'Technical Sessions', ''),
     createData('', '',  'Innovative Brake Rotors'),
    createData('', '',  'Strategy Panel'),
    createData('12:20–13:20', 'Lunch', ''),
    createData('13:20–15:00', 'Technical Sessions', ''),
     createData('', '',  'Advanced Manufacturing with integrated Quality Control Friction Material'),
    createData('', '',  'Challenges Around the Physical Characterisation of Brake Discs: Theory and Metrology'),
    createData('',  '', 'Latest Developments in Motorsport and Motorbike Brake Systems'),
    createData('15:00–15:30', 'Break', ''),
    createData('15:30–17:10', 'Technical Sessions', ''),
     createData('',  '', 'Artificial Intelligence and Machine Learning'),
    createData('', '',  'Fundamentals of Friction'),
    createData('', '',  'International Regulations and Standards - ISO Project Review'),
    createData('17:10–18:10', 'Farewell Drinks Reception', ''),
    
  ];
  

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="table_summary-box">
            {expanded === 'panel1' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Tuesday 2 June</Typography>
          </div>
          {expanded !== 'panel1' ?
            <Typography className="table-sub">Click to reveal timings and sessions</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table className="" aria-label="simple table">
            <TableBody>
              {tuesday.map(row => (
                <TableRow key={row.time}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.time}</StyledCell>
                  {row.sessionName ? <StyledCell align="left" className="StyledCell-sesh">{row.sessionName}</StyledCell> : <StyledCell align="left" className="StyledCell-data">{row.session}</StyledCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="table_summary-box">
            {expanded === 'panel2' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Wednesday 3 June</Typography>
          </div>
          {expanded !== 'panel2' ?
            <Typography className="table-sub">Click to reveal timimgs and sessions</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Table className="" aria-label="simple table">
            <TableBody>
              {wednesday.map(row => (
                <TableRow key={row.time}>
                   <StyledCell component="th" scope="row" className="StyledCell-title">{row.time}</StyledCell>
                    {row.sessionName ? <StyledCell align="left" className="StyledCell-sesh">{row.sessionName}</StyledCell> : <StyledCell align="left" className="StyledCell-data">{row.session}</StyledCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="table_summary-box">
            {expanded === 'panel3' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Thursday 4 June</Typography>
          </div>
          {expanded !== 'panel3' ?
            <Typography className="table-sub">Click to reveal timings and sessions</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {thursday.map(row => (
                <TableRow key={row.time}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.time}</StyledCell>
                  {row.sessionName ? <StyledCell align="left" className="StyledCell-sesh">{row.sessionName}</StyledCell> : <StyledCell align="left" className="StyledCell-data">{row.session}</StyledCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
   
    </div>
  );
}

