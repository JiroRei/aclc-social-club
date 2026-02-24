import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { subjects } from "@/data/subjects";

export default function SchedulePage(){

    return(
        <main>
            <div className="flex p-2 justify-center">
                
                <div className="flex flex-col items-center shadow-xl gap-5 bg-blue-100 rounded-md p-2 w-3/4">
                    <div className="flex gap-5 self-start pl-5 pt-3">
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
                        <Table className="bg-blue-50 cursor-default">
                            <TableHeader>
                                <TableRow className="hover:-bg-muted">
                                    <TableHead>Subject Code</TableHead>
                                    <TableHead>Subject Title</TableHead>
                                    <TableHead>Day</TableHead>
                                    <TableHead>Time</TableHead>
                                    <TableHead>Section</TableHead>
                                    <TableHead className="text-right">Teacher</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {subjects.map((subjects, index) =>(
                                    <TableRow className="hover:bg-blue-200">
                                        <TableCell className="font-medium">{subjects.subjectCode}</TableCell>
                                        <TableCell>{subjects.subject}</TableCell>
                                        <TableCell>{subjects.day}</TableCell>
                                        <TableCell>{subjects.time}</TableCell>
                                        <TableCell>{subjects.section}</TableCell>
                                        <TableCell className="text-right">{subjects.teacher}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </main>
    );
}