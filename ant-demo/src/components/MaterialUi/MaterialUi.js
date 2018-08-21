import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/pink'

import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  }
})
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})
class MaterialUi extends Component {
  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <Button mini variant="fab" color="primary">
          Hello
        </Button>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
          margin="normal"
        />
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(MaterialUi)
