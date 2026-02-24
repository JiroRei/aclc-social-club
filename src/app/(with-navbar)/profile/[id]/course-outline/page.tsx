import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CourseOutline(){
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
                            <h1>Status: </h1>
                        </div>
                        <div>
                            <h1 className="font-bold">Mikko P. Borja </h1>
                            <h1 className="font-bold">Bachelor of Science in Information Systems </h1>
                            <h1 className="font-bold">24004070900</h1>
                            <h1 className="font-bold">2nd Year </h1>
                            <h1 className="font-bold">Enrolled </h1>
                        </div>
                    </div>
                    
                    
                    <Separator className="bg-blue-900"/>

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-lg font-semibold self-start">First Year</h1>
                        <Table className="w-lg">
                            <TableHeader>
                                <TableRow>
                                <TableHead>Course Code</TableHead>
                                <TableHead>Course Title</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead className="text-right">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS1234</TableCell>
                                <TableCell>Subject 1</TableCell>
                                <TableCell>1.00</TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS5678</TableCell>
                                <TableCell>Subject 2</TableCell>
                                <TableCell>1.00</TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS9101</TableCell>
                                <TableCell>Subject 3</TableCell>
                                <TableCell>1.00</TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>

                        <h1 className="text-lg font-semibold self-start">Second Year</h1>
                        <Table className="w-lg">
                            <TableHeader>
                                <TableRow>
                                <TableHead>Course Code</TableHead>
                                <TableHead>Course Title</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead className="text-right">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS1234</TableCell>
                                <TableCell>Subject 4</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS5678</TableCell>
                                <TableCell>Subject 5</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS9101</TableCell>
                                <TableCell>Subject 6</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>

                        <h1 className="text-lg font-semibold self-start">Third Year</h1>
                        <Table className="w-lg">
                            <TableHeader>
                                <TableRow>
                                <TableHead>Course Code</TableHead>
                                <TableHead>Course Title</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead className="text-right">Remarks</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS7777</TableCell>
                                <TableCell>Subject 7</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS8888</TableCell>
                                <TableCell>Subject 8</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">IS9999</TableCell>
                                <TableCell>Subject 9</TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right"></TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                    </div>
                </div>
            </div>
        </main>
    );
}