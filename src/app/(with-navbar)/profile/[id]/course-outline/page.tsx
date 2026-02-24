import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { courseList1_1, courseList1_2, courseList2_1, courseList2_2 } from "@/data/courselist";

export default function CourseOutline(){
    return(
        <main>
            <div className="flex p-2 justify-center">
                <div className="flex flex-col items-center rounded-md bg-blue-100 gap-5  p-2 w-2/3">
                    <div className="flex gap-5 self-start ml-5">
                        <div className="flex flex-col">
                            <h1>Name: </h1>
                            <h1>USN: </h1>
                            <h1>Course: </h1>
                            <h1>Year Level: </h1>
                            <h1>Status: </h1>
                        </div>
                        <div>
                            <h1 className="font-bold">Mikko P. Borja </h1>
                            <h1 className="font-bold">24004070900</h1>
                            <h1 className="font-bold">Bachelor of Science in Information Systems </h1>
                            <h1 className="font-bold">2nd Year </h1>
                            <h1 className="font-bold">Enrolled </h1>
                        </div>
                    </div>
                    
                    
                    <Separator className="bg-blue-900"/>

                    <div className="flex flex-col gap-2 items-center justify-center w-3/4">
                        <h1 className="text-lg font-semibold self-start">First Year</h1>
                        <Table className="bg-blue-50 rounded-md cursor-default">
                            <TableHeader>
                                <TableRow>
                                <TableHead>Course Code</TableHead>
                                <TableHead className="text-center">Course Title</TableHead>
                                <TableHead className="text-center">Units</TableHead>
                                <TableHead className="text-center">Grade</TableHead>
                                <TableHead className="text-center">Remarks</TableHead>
                                <TableHead className="text-right">Pre Requisites</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {courseList1_1.map((course) => (
                                    <TableRow key={course.courseCode}>
                                        <TableCell className="font-medium">{course.courseCode}</TableCell>
                                        <TableCell className="text-center">{course.courseTitle}</TableCell>
                                        <TableCell className="text-center">{course.units}</TableCell>
                                        <TableCell className="text-center">{course.grade}</TableCell>
                                        <TableCell className="text-center">{course.remarks}</TableCell>
                                        <TableCell className="text-right">{course.prereq}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableBody>
                                {courseList1_2.map((course) => (
                                    <TableRow key={course.courseCode}>
                                        <TableCell className="font-medium">{course.courseCode}</TableCell>
                                        <TableCell className="text-center">{course.courseTitle}</TableCell>
                                        <TableCell className="text-center">{course.units}</TableCell>
                                        <TableCell className="text-center">{course.grade}</TableCell>
                                        <TableCell className="text-center">{course.remarks}</TableCell>
                                        <TableCell className="text-right">{course.prereq}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <h1 className="text-lg font-semibold self-start">Second Year</h1>
                        <Table className="bg-blue-50 rounded-md cursor-default">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center">Course Code</TableHead>
                                    <TableHead className="text-center">Course Title</TableHead>
                                    <TableHead className="text-center">Units</TableHead>
                                    <TableHead className="text-center">Grade</TableHead>
                                    <TableHead className="text-center">Remarks</TableHead>
                                    <TableHead className="text-right">Pre Requisites</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {courseList2_1.map((course) => (
                                    <TableRow key={course.courseCode}>
                                        <TableCell className="font-medium">{course.courseCode}</TableCell>
                                        <TableCell className="text-center">{course.courseTitle}</TableCell>
                                        <TableCell className="text-center">{course.units}</TableCell>
                                        <TableCell className="text-center">{course.grade}</TableCell>
                                        <TableCell className="text-center">{course.remarks}</TableCell>
                                        <TableCell className="text-right">{course.prereq}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableBody>
                                {courseList2_2.map((course) => (
                                    <TableRow key={course.courseCode}>
                                        <TableCell className="font-medium">{course.courseCode}</TableCell>
                                        <TableCell className="text-center">{course.courseTitle}</TableCell>
                                        <TableCell className="text-center">{course.units}</TableCell>
                                        <TableCell className="text-center">{course.grade}</TableCell>
                                        <TableCell className="text-center">{course.remarks}</TableCell>
                                        <TableCell className="text-right">{course.prereq}</TableCell>
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