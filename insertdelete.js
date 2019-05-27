function insert() {
    var my_array = ["a", "c", "k"];
    var start_index = 1;
    var number_of_elements_to_remove = 0;
    my_array.splice(start_index, number_of_elements_to_remove, "b");
    console.log(my_array);
}
insert();
function remove() {
    var my_array = ["a", "b", "c", "k", "d"];
    var start_index = 3;
    var number_of_elements_to_remove = 1;
    var removed_elements = my_array.splice(start_index, number_of_elements_to_remove);
    console.log(removed_elements);
    console.log(my_array);
}
// console.log(my_array);
//console.log(my_array);
remove();
