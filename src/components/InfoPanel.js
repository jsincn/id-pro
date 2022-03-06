import React from 'react';
import { List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class InfoPanel extends React.Component {


  render() {
    return (<div><Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Über die Studie</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <diV style={{ marginTop: 10 }}>
            Liebe Studierende,
          </diV>
          <div style={{ marginTop: 10 }}>
            vielen Dank, dass sich an meiner Forschungsarbeit zum Thema „Motivation, Motiv und Denkstil – die Wirkung von Flow auf das Lernen von Mathematik-Grundlagen“ beteiligen. Im Rahmen einer Längsschnittanalyse wird ermittelt, welche Faktoren Einfluss auf das Erleben von Flow beim Lernen haben und inwiefern dadurch die Übungszeiten und der Spaß am Lernen auch in einem Fach wie Mathematik erhöht werden kann. Längsschnittanalyse heißt in diesem Fall, dass ich Sie zu verschiedenen Zeitpunkten befragen möchte. Der erste Fragebogen ist etwas umfangreicher und dauert in der Bearbeitung etwa 15 Minuten, alle weiteren Befragungen sind deutlich kürzer und dauern maximal 5 Minuten in der Bearbeitung.
          </div>
          <div style={{ marginTop: 10 }}>
            Damit die Ergebnisse anonym immer einer Person zuzuordnen sind, müssen Sie mit dieser E-Mail einen ID-Code beantragen. Bitte bewahren Sie diesen 4-stelligen Zahlencode (Zahl zwischen 1000 und 9999) gut auf, er muss auf allen Fragebögen und auch beim Üben eingegeben werden.
          </div>
          <div style={{ marginTop: 10 }}>
            Die ersten beiden Fragebögen dürfen Sie während der Einführungsveranstaltung beantworten. Sollten das bei Ihnen nicht geklappt haben, finden Sie den ersten Fragebogen unter folgendem Link: <Link href="https://www.soscisurvey.de/flowstudie_2021/">Link zum Fragebogen</Link>
            <br></br>
            Ebenso sollten Sie immer vor und nach dem Üben einen kurzen Fragebogen ausfüllen, dabei geht es um Ihre momentane Stimmungslage, das Ausfüllen dauert nur wenige Minuten.
            </div><div style={{ marginTop: 10 }}>
            Vor dem Üben bitte den Fragebogen zu Ihrer aktuellen Motivation ausfüllen - <Link href="https://www.soscisurvey.de/Einfuehrungsveranstaltung/">Link zum Fragebogen</Link>
            </div><div style={{ marginTop: 0 }}>Mittags bekommen Sie dann eine Mail mit dem Link zur Flow-Kurz-Skala  - <Link href="https://www.soscisurvey.de/fkseinfuehrung2022/">https://www.soscisurvey.de/fkseinfuehrung2022/</Link> – der Fragebogen umfasst nur 16 Items, so dass das Ausfüllen maximal 5 Minuten dauern wird.
            </div><div style={{ marginTop: 10 }}>

            Ebenso sollten Sie am Dienstag und Donnerstag jeweils nach der kurzen Morgenrunde und dann vor der Mittagspause direkt nach dem Üben einen kurzen Fragebogen ausfüllen, dabei geht es um Ihre momentane Stimmungslage, das Ausfüllen dauert auch diesmal nur wenige Minuten, jeder der beiden Fragebögen hat unter 20 Items.
            </div><div style={{ marginTop: 10 }}>
            Vor dem Üben am Dienstag und Donnerstag bitte den Fragebogen zu Ihrer aktuellen Motivation ausfüllen - <Link href="https://www.soscisurvey.de/motivationSS22/">https://www.soscisurvey.de/motivationSS22/ </Link>
            </div><div style={{ marginTop: 10 }}>
            Nach dem Üben am Dienstag und Donnerstag bitte den Fragebogen zum Flow-Erleben ausfüllen - <Link href="https://www.soscisurvey.de/flow_SS22/">https://www.soscisurvey.de/flow_SS22/</Link>
            </div><div style={{ marginTop: 10 }}>
            Ein letzter kurzer Fragebogen kommt dann nochmal am Freitagmorgen -  <Link href="https://www.soscisurvey.de/sdt_SS2022/">https://www.soscisurvey.de/sdt_SS2022/</Link>
            Wichtig: Bitte geben Sie auf allen Fragebögen Ihren ID-Code an, damit ich die Fragebögen anonym zuordnen kann.

            </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Zur Person</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Als Mitarbeiterin des E-Learning und E-Assessment Team bin ich zuständig für die Organisation und Durchführung des Online-Mathe-Vorkurses und des Mathematik-Grundlagen-Tests an der Hochschule Heilbronn. Im Rahmen meiner Promotion führe ich in diesem Semester mit den Kursteilnehmern eine Längsschnittanalyse zum Thema „Motivation, Motiv und Denkstil – die Wirkung von Flow auf das Lernen von Mathematik-Grundlagen“ durch. Bei Fragen zur Studie stehe ich Ihnen gerne unter der E-Mail-Adresse <Link href="mailto:kerstin.steimle@hs-heilbronn.de">kerstin.steimle@hs-heilbronn.de</Link> zur Verfügung.  </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Infos zur Verlosung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ihr ID-Code ist auch der Glückscode für die Verlosung von

            <br />
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary="1.	Preis: JBL GO 3" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2.	Preis: One by Wacom" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3.	Preis: Anker 325 Powerbank" />
              </ListItem>
            </List>
           
          
            
            
            


            Die Preis werden unter allen Teilnehmern verlost, die an sämtlichen Befragungen der Längsschnittanalyse teilgenommen haben.


            Der Gewinn-ID-Code wird im Mathe-Grundlagen-Kurs in Ilias veröffentlicht. Nachweis ist die E-Mail mit dem ID-Code, die sie vom System erhalten haben.



              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Datenschutz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Die für die Erstellung des Codes von Ihnen angegebene E-Mail-Adresse wird von mir nicht gespeichert und kann aufgrund eines kryptografischen Hashingverfahrens (sha256) von mir nicht rückverfolgt werden. Dieses Hashing ermöglicht es allerdings mit der gleichen E-Mail-Adresse den ID-Code erneut abzufragen. Bitte archivieren Sie die E-Mail mit Ihrem ID-Code dennoch sorgfältig, damit Sie bei allen Befragungen und beim Üben in Bettermarks einfach darauf zugreifen können.

            Mit der Anforderung des ID-Codes stimmen Sie zu, dass die in der Studie von Ihnen gemachten Angaben und persönlichen Daten in anonymisierter Form für die genannten Forschungszwecke verwendet werden dürfen.

            Bei Fragen wenden Sie sich bitte per E-Mail an <Link href="mailto:kerstin.steimle@hs-heilbronn.de">kerstin.steimle@hs-heilbronn.de</Link>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Kontakt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Inhaltliche Verantwortung:</b>
            <div>
              Dipl.-Kffr. Kerstin Steimle
              </div><div>
              Telefon: +49 7131 504 6735
              </div><div>
              E-Mail: <Link href="mailto:kerstin.steimle@hs-heilbronn.de">kerstin.steimle@hs-heilbronn.de</Link>
            </div><div>
              Büroadresse: G212 Campus Sontheim
              </div><div>
              Postadresse: Max-Planck-Str. 39, 74081 Heilbronn
            </div>
            <div>
              <b>Technische Realisierung:</b>
            </div>
            <div>Jakob Steimle<br />Mail: <Link href="mailto:jakob@stei.ml">jakob@stei.ml</Link><br />Web: <Link href="https://stei.ml">stei.ml</Link></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
  }

}