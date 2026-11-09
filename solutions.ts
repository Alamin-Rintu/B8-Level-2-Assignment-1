// probelm:1
const multiplyValue = (value: number, multiplier: number = 2) => {
  return value * multiplier;
};
// console.log(multiplyValue(7, 0));

// probelm:2

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};
// console.log(processInput(7));

// probelm:3

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longtitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longtitude})`;
};
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// probelm: 4;

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// probelm:5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
// console.log(getPopularCourses(courses, 80));

// probelm:6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "name"));

// console.log(pluckValues(users, "id"));

// Problem 7:

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// const manager = new Manager("Alice", 50000, "Engineering");

// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

// problem:8
const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
// const result = await validateAgeAsync(15);
// console.log(result);
