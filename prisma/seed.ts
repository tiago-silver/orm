import { prisma } from "@/prisma";

//Criação da função assíncrona para popular as tabelas

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Ricardo",
                email: "ricardo@gamil.com"
            },
            {
                name: "Pedro",
                email: "pedro@gamil.com"
            },
        ]
    })
}

seed().then(() => {
    console.log("Database seeded!")
    //Para garantir a desconexão desse instancia
    prisma.$disconnect()
})

//Construir o script para execução do seed
