import { NextResponse } from 'next/server';

const sekolahMOEIS = require('../../../../data/sekolah.json');

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const jkod = searchParams.get('jkod');
  const katkod = searchParams.get('katkod');

  const sekolahByNegeri = sekolahMOEIS.sekolah_by_negeri.filter((e) => {
    return e.NEGERI === jkod;
  });

  return NextResponse.json(sekolahByNegeri);
}
