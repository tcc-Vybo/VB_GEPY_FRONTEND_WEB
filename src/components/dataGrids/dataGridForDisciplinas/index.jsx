import { DataGrid } from '@mui/x-data-grid';
export default function DataGridForDisciplinas ({rows, columns}) {

  return (
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      sx={{
        boxShadow: 2,
        borderRadius: 2,
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: 'white',     // Cor de fundo do footer
          color: 'black',        // Cor do texto no footer
          fontSize: '12px',               // Tamanho da fonte no footer
          padding: '8px',                 // Padding no footer
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: '#D7A1FF',     // Cor de fundo ao passar o mouse nas linhas
          color: 'white'
        },
        '& .MuiDataGrid-cell:focus': {
          outline: 'none',               // Remove o contorno padrão
          backgroundColor: '#D7A1FF',    // Cor de fundo personalizada para célula focada
          color: 'white'
        },
        '& .MuiDataGrid-row:focus-within': {
          backgroundColor: '#D7A1FF',    // Cor de fundo personalizada para a linha em foco
          outline: 'none',               // Remove o contorno padrão da linha
          color: 'white'
        },
        '& .MuiDataGrid-row.Mui-selected': {
          backgroundColor: '#D7A1FF',    // Cor para a linha selecionada, caso seja necessário
          color: 'white'
        },
        '& .MuiDataGrid-row.Mui-selected:hover': {
          backgroundColor: '#D7A1FF',    // Cor para a linha selecionada, caso seja necessário
          color: 'white'
        },
      }}
    />
  );
}