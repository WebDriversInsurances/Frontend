import {Driver} from "./Types.ts";

export const requestTime = 1000

export const DriversMock: Driver[] = [
    {
        id: 1,
        full_name: 'Козлова Елена Михайловна',
        birth_date: '1992-04-03',
        address: 'ул. Морская, д. 78, кв. 22',
        phone_number: '+7 (555) 789-1234',
        email: 'elena@example.com',
        driver_license_number: 'GH567890',
        issue_date: '2017-09-18',
        expiration_date: '2027-09-18',
        passport_number: '2345 678901',
        status: 1,
        image: "",
    },
    {
        id: 2,
        full_name: 'Иванов Иван Иванович',
        birth_date: '1980-05-15',
        address: 'ул. Примерная, д. 123, кв. 45',
        phone_number: '+7 (123) 456-7890',
        email: 'ivan@example.com',
        driver_license_number: 'AB123456',
        issue_date: '2005-07-20',
        expiration_date: '2030-07-20',
        passport_number: '1234 567890',
        status: 1,
        image: "",
    },
    {
        id: 3,
        full_name: 'Петрова Петра Петровна',
        birth_date: '1995-02-28',
        address: 'ул. Образцовая, д. 45, кв. 12',
        phone_number: '+7 (987) 654-3210',
        email: 'petra@example.com',
        driver_license_number: 'CD789012',
        issue_date: '2018-11-10',
        expiration_date: '2028-11-10',
        passport_number: '5678 901234',
        status: 1,
        image: "",
    },
    {
        id: 4,
        full_name: 'Сидоров Алексей Васильевич',
        birth_date: '1988-08-10',
        address: 'пр. Приморский, д. 56, кв. 3',
        phone_number: '+7 (777) 123-4567',
        email: 'alex@example.com',
        driver_license_number: 'EF345678',
        issue_date: '2010-03-05',
        expiration_date: '2030-03-05',
        passport_number: '9012 345678',
        status: 1,
        image: "",
    },
    {
        id: 5,
        full_name: 'Григорьев Дмитрий Николаевич',
        birth_date: '1975-12-20',
        address: 'пр. Ленина, д. 34, кв. 7',
        phone_number: '+7 (111) 987-6543',
        email: 'dmitry@example.com',
        driver_license_number: 'IJ123456',
        issue_date: '2002-06-12',
        expiration_date: '2032-06-12',
        passport_number: '6789 012345',
        status: 1,
        image: "",
    },
];