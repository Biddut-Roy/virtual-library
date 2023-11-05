

const Library = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>List</th>
        <th> Library Name</th>
        <th>Website</th>
        <th>Stock Book</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Project Gutenberg </td>
        <td>https://gutenberg.org</td>
        <td>60,000 </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Libby</td>
        <td>https://www.overdrive.com/apps/libby</td>
        <td>30,00+</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Scribd</td>
        <td>https://www.scribd.com/</td>
        <td>170 M+</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Library;