import { Card, CardContent, Typography } from "@mui/material";
import { TextSkeleton } from "./skeletons";

export default function AskResult({ result, load = false }: { result: string, load: boolean }) {
    return (
        <Card sx={{ minWidth: 475, height: 400, overflow: "auto" }}>
            <CardContent>
                {!load ? <Typography style={{ whiteSpace: "pre-wrap" }} variant="body2">
                    {result}
                </Typography> : <TextSkeleton />}
            </CardContent>
        </Card>
    );
}