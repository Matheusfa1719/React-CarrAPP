import React from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles({
    success: {
        backgroundColor: green[500]
    },
    error: {
        backgroundColor: red[600]
    }
});

export default function notify() {
    const dispatch = useDispatch()
    const notify = useSelector(state => state.notifyReducer)
    return (
        <div>
            
        </div>
    )
}
