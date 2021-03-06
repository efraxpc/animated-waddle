import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import { FaPowerOff, FaTrash, FaPencilAlt } from 'react-icons/fa'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  margin: {
    margin: theme.spacing.unit
  }
})

let id = 0
function createData(name, calories, fat, carbs, protein) {
  id += 1
  return { id, name, calories, fat, carbs, protein }
}

function listTable(props) {
  const { classes, data: licences , handleClickOpenModalAddEdit, handleClickOpenModalRemove} = props
  const arrayLicences = licences.licences
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell align="right">Fecha de caducidad</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Activo</TableCell>
            <TableCell align="right">Fecha de creación</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrayLicences
            ? arrayLicences.map(row => {
                let isActiveIcon =
                  row.isActive === true ? (
                    <FaPowerOff color={'#6673b7'} />
                  ) : (
                    <FaPowerOff color={'#cfd1d3'} />
                  )
                return (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.key}
                    </TableCell>
                    <TableCell align="right">
                      {moment(row.dueDate).format('L')}
                    </TableCell>
                    <TableCell align="right">{row.user[0].email}</TableCell>
                    <TableCell align="right">{isActiveIcon}</TableCell>
                    <TableCell align="right">
                      {moment(row.createdAt).format('L')}
                    </TableCell>
                    <TableCell align="right">
                      <a href="#">
                        <FaPencilAlt color={'#6673b7'} 
                        onClick={(e)=>{
                          e.preventDefault()
                          handleClickOpenModalAddEdit({id:row._id})
                        }} />
                      </a>
                      <a href="#">
                        <FaTrash color={'#6673b7'} onClick={(e)=>{
                          e.preventDefault()
                          handleClickOpenModalRemove({id:row._id})
                        }}/>
                      </a>
                    </TableCell>
                  </TableRow>
                )
              })
            : null}
        </TableBody>
      </Table>
    </Paper>
  )
}

listTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(listTable)
