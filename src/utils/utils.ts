export function getAge(birthday: string) {
    const [day, month, year] = birthday.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const currentDate = new Date();
    let age = currentDate.getFullYear() - date.getFullYear();
    if (currentDate.getMonth() < date.getMonth() || (currentDate.getMonth() == date.getMonth() && currentDate.getDate() < date.getDate())) {
        age--;
    }
    return age;
}