import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function CardItem({ item }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="160"
        image={item.image || "/placeholder.png"}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
