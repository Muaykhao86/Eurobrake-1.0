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


`;

export default function ExpandTable() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function createData(days, Early, Full, walk) {
    return { days, Early, Full, walk };
  }

  

  const delegateRows = [
    createData('3 x days', 940, 1180),
    createData('2 x days', 640, 800),
    createData('1 x days', 320, 400),
  ];
  const delegateMemberRows = [
    createData('3 x days', 846, 1000),
    createData('2 x days', 576, 720),
    createData('1 x days', 288, 360),
  ];
  const studentRows = [
    createData('3 x days', 170, 170),
    createData('2 x days', 170, 170),
    createData('1 x days', 170, 170),
  ];
  const expoRows = [
    createData('3 x days', 220, 250, 280),
    createData('2 x days', 150, 180, 200),
    createData('1 x days', 70, 100, 150),
  ];
  const academicRows = [
    createData('3 x days', 658, 826),
    createData('2 x days', 448, 560),
    createData('1 x days', 224, 280),
  ];
  const academicSessionRows = [
    createData('3 x days', 348, 348),
    createData('2 x days', 237, 237),
    createData('1 x days', 118, 118),
  ];
  const sessionRows = [
    createData('3 x days', 517, 517),
    createData('2 x days', 352, 352),
    createData('1 x days', 176, 176),
  ];

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="table_summary-box">
            {expanded === 'panel1' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Delegate</Typography>
          </div>
          {expanded !== 'panel1' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table className="" aria-label="simple table">
            <TableBody>
              {delegateRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
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
            <Typography className="table-heading">Delegate - Member Society</Typography>
          </div>
          {expanded !== 'panel2' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Table className="" aria-label="simple table">
            <TableBody>
              {delegateMemberRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
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
            <Typography className="table-heading">Student</Typography>
          </div>
          {expanded !== 'panel3' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {studentRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="table_summary-box">
            {expanded === 'panel4' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Expo Only</Typography>
          </div>
          {expanded !== 'panel4' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {expoRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Walk in</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.walk.toFixed(2)}</StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <div className="table_summary-box">
            {expanded === 'panel5' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Academic</Typography>
          </div>
          {expanded !== 'panel5' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {academicRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
          <div className="table_summary-box">
            {expanded === 'panel6' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Academic Session - Chair/Speaker/Author</Typography>
          </div>
          {expanded !== 'panel6' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {academicSessionRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
          <div className="table_summary-box">
            {expanded === 'panel7' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Session - Chair/Speaker/Author</Typography>
          </div>
          {expanded !== 'panel7' ?
            <Typography className="table-sub">Click to reveal prices</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Table className="" aria-label="simple table">
            <TableBody>
              {sessionRows.map(row => (
                <TableRow key={row.days}>
                  <StyledCell component="th" scope="row" className="StyledCell-title">{row.days}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Earlybird price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Early.toFixed(2)}</StyledCell>
                  <StyledCell align="left" className="StyledCell-title">Full Price</StyledCell>
                  <StyledCell align="left" className="StyledCell-data">&euro; {row.Full.toFixed(2)}</StyledCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

