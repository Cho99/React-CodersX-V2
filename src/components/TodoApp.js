import React, { Component } from "react";
import Modal from "./Modal";
import Upcoming from "./Upcoming";
import Finished from "./Finished";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      activeModal: false,
      newItem: "",
      todoItems: []
    };
    this.showModal = this.showModal.bind(this);
    this.onExitModal = this.onExitModal.bind(this);
    this.addItems = this.addItems.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFinished = this.onFinished.bind(this);
  }

  showModal() {
    this.setState({ activeModal: true });
  }

  onExitModal() {
    this.setState({ activeModal: false });
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  addItems() {
    const item = document.getElementById("todo");
    let value = item.value;
    if (!value || !value.trim()) {
      alert("Hãy nhập việc cần làm");
      return;
    }

    this.setState({
      newItem: "",
      todoItems: [{ title: value, isDone: false }, ...this.state.todoItems]
    });
    this.onExitModal();
  }

  onFinished(item) {
    return (event) => {
      const isDone = item.isDone;
      var { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [...todoItems.slice(0, index), {...item, isDone: !isDone}, ...todoItems.slice(index + 1)]
      });
    };
  }

  render() {
    const { newItem, todoItems, activeModal } = this.state;
    var content;
    var content1;
    var content2;
    if (todoItems != 0) {
      content1 = (
        <div className="upcoming">
          <h4>Upcoming</h4>
          {todoItems &&
            todoItems
              .filter(item => item.isDone == false)
              .map((item, index) => (
                <Upcoming
                  key={index}
                  number={index}
                  item={item}
                  onFinished={this.onFinished(item)}
                />
              ))}
        </div>
      );
      content2 = (
        <div className="finished">
          <h4>Finished</h4>
          {todoItems &&
            todoItems
              .filter(item => item.isDone == true)
              .map((item, index) => (
                <Finished key={index} number={index} item={item} />
              ))}
        </div>
      );
    } else {
      content = (
        <div className="nothing">
          <img
            src="https://cdn.glitch.com/4e19a974-9557-478d-bd6b-f06176819f49%2Fundraw_Taken_if77.svg?v=1590717177020"
            width={250}
            height={250}
          ></img>
        </div>
      );
    }
    return (
      <div className="TodoApp">
        <div className="header">
          <img
            src="https://cdn.glitch.com/4e19a974-9557-478d-bd6b-f06176819f49%2Finterface.png?v=1589810716948"
            width={32}
            height={32}
          ></img>
          <h1>Daily List</h1>
        </div>
        {content}

        {content1}
        {content2}
        <div className="add">
          <button onClick={this.showModal}>
            <img src="https://cdn.glitch.com/4e19a974-9557-478d-bd6b-f06176819f49%2Fshapes-and-symbols.png?v=1589813559895"></img>
          </button>
        </div>
        <Modal
          active={activeModal}
          exit={this.onExitModal}
          addItems={this.addItems}
          newItem={newItem}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming
