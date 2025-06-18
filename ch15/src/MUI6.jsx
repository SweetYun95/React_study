import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import IconButton from '@mui/material/IconButton'

function MUI6() {
   return (
      <>
         <AccountBalanceIcon />
         <AddIcCallIcon />
         <br />
         <IconButton color="secondary" aria-label="call">
            <AddIcCallIcon />
         </IconButton>
      </>
   )
}

export default MUI6
