import { NextResponse } from 'next/server';

const pelajarMOEIS = require('../../../../data/pelajar.json');

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const inid = searchParams.get('inid');
  const pkid = searchParams.get('pkid');

  const pelajarByKelas = pelajarMOEIS.pelajar_by_kelas.filter((e) => {
    return e['ID Institusi'] === inid;
  });

  return NextResponse.json(pelajarByKelas);
}
