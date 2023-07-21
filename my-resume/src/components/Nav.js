import React from "react";
import { Link, Typography, ListItemButton, ListItemText, ListItem, List, Stack, Button, } from "@mui/material";

export function Nav({direction}) {
  const list = ["Home","Blog","Certifications","Contact"];
   
  const lists = list.map((list) =>
    {
      return (
        <Button>
          {list}
        </Button>
      )
    });
  return (
    <Stack direction={'column'} spacing={2} padding={1}>
          <Typography textAlign='center' >
          {lists}
          </Typography>
    </Stack>
  );
}
