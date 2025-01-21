function Province({ province, index }) {
  const { kota, kasus, sembuh, dirawat, meninggal, name, numbers } = province;


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{kota || name}</td>
      {/* agar angka 0 muncul, karena dianggap falsy oleh javascrip */}
      <td>{kasus !== undefined ? kasus : numbers?.confirmed}</td>
      <td>{sembuh !== undefined ? sembuh : numbers?.recovered}</td>
      <td>{dirawat !== undefined ? dirawat : numbers?.treatment}</td>
      <td>{meninggal !== undefined ? meninggal : numbers?.death}</td>
    </tr>
  );
}

export default Province;
