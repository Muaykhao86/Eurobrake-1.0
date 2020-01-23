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
import OneForm from './forms/OneForm';



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


export default function LoginExpandTable() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="table_summary-box">
            {expanded === 'panel1' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Login</Typography>
          </div>
          {expanded !== 'panel1' ?
            <Typography className="table-sub">Click to reveal Login Form</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
                 <OneForm form='login'/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="table_summary-box">
            {expanded === 'panel2' ? <RemoveCircle className="table-icon" /> : <AddCircle className="table-icon" />}
            <Typography className="table-heading">Create Author Account</Typography>
          </div>
          {expanded !== 'panel2' ?
            <Typography className="table-sub">Click to reveal Form</Typography>
            : null}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography className="table-sub">We are not currently accepting new authors</Typography>
          {/* <OneForm form='author' /> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
