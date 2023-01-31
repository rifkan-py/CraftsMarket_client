const Orders = () => {
  return (
    <div>
      <div>
        <h3>Order Details</h3>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>John Doe</td>
              <td>01/01/2023</td>
              <td>$50.00</td>
              <td>Pending</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Jane Doe</td>
              <td>01/02/2023</td>
              <td>$75.00</td>
              <td>Processing</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>John Smith</td>
              <td>01/03/2023</td>
              <td>$100.00</td>
              <td>Completed</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
