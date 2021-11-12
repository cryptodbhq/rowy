import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import GoIcon from "assets/icons/Go";
import { LocalGasStation, TrackChanges, Language } from "@mui/icons-material";
import { Table } from "contexts/ProjectContext";

export interface ITableCardProps extends Table {
  link: string;
  actions?: React.ReactNode;
}

export default function TableCard({
  section,
  name,
  description,
  link,
  actions,
}: ITableCardProps) {
  return (
    <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          borderRadius: 2,
        }}
        component={Link}
        to={link}
      >
        <CardContent>
          {/* <Typography variant="overline" component="p">
            {section}
          </Typography> */}
          <Typography component="h6" gutterBottom>
            {name}
          </Typography>
          <div style={{ fontSize: "10px" }}>
            <LocalGasStation style={{ verticalAlign: "middle" }} />
            FeeToken: Ether <br />
            <Language style={{ verticalAlign: "middle", paddingTop: "8px" }} />
            ChainId: 1 <br />
            <TrackChanges
              style={{ verticalAlign: "middle", paddingTop: "8px" }}
            />
            Bip44: 60
          </div>
          <Typography
            color="textSecondary"
            sx={{
              minHeight: (theme) =>
                (theme.typography.body2.lineHeight as number) * 2 + "em",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          variant="text"
          color="primary"
          endIcon={<GoIcon />}
          component={Link}
          to={link}
        >
          Open
        </Button>

        <div style={{ flexGrow: 1 }} />

        {actions}
      </CardActions>
    </Card>
  );
}
