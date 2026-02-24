import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SchedulePage(){
    return(
        <main>
            <div className="flex p-2 justify-center">
                
                <div className="flex flex-col items-center border-2 gap-5 border-blue-900 p-2 w-xl">
                    <div className="flex gap-5 items-start">
                        <div className="flex flex-col">
                            <h1>Name: </h1>
                            <h1>USN: </h1>
                            <h1>Course: </h1>
                            <h1>Year Level: </h1>
                        </div>
                        <div>
                            <h1 className="font-bold">Mikko P. Borja </h1>
                            <h1 className="font-bold">BS Information Systems </h1>
                            <h1 className="font-bold">24004070900</h1>
                            <h1 className="font-bold">2nd Year </h1>
                        </div>
                    </div>
                    
                    
                    <Separator className="bg-blue-900"/>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-lg font-semibold self-start">SY 2025-2026 Second Semester</h1>
                        <Table className="w-lg">
                            <TableHeader>
                                <TableRow>
                                <TableHead>Subject Code</TableHead>
                                <TableHead>Subject Title</TableHead>
                                <TableHead>Day</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead className="text-right">Section</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">IS1234</TableCell>
                                    <TableCell>Subject 1 Lab</TableCell>
                                    <TableCell>Monday</TableCell>
                                    <TableCell>7:00 - 9:00 PM</TableCell>
                                    <TableCell className="text-right">BSIS 22-A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">IS5678</TableCell>
                                    <TableCell>Subject 2 Lab</TableCell>
                                    <TableCell>Tuesday</TableCell>
                                    <TableCell>1:30 - 3:30 PM</TableCell>
                                    <TableCell className="text-right">BSIS 22-A</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">IS9222</TableCell>
                                    <TableCell>Subject 3 Lec</TableCell>
                                    <TableCell>Tuesday</TableCell>
                                    <TableCell>3:30 - 5:30 PM</TableCell>
                                    <TableCell className="text-right">BSIS 22-A</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </main>
    );
}