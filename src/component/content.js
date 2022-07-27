import { Component } from "react";

class Content extends Component {
    // create event handler
    showInfo(info) {
        alert("information " + info)
    }

    render() {
        return (
            <div className="container-lg">
                <table className="table table striped mt-4">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Apep</td>
                            <td>Cilacap</td>
                            <td>
                                {/* onClick will take action when button is clicked */}
                                <button onClick={() => this.showInfo(1)}>Show</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Yurham</td>
                            <td>Cilacap</td>
                            <td>
                                <button onClick={() => this.showInfo(1)}>Show</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Mpus</td>
                            <td>Surabaya</td>
                            <td>
                                <button onClick={() => this.showInfo(1)}>Show</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Content;