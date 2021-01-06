import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  const { title } = props;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">{title}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
