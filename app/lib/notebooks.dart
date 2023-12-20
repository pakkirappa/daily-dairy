import 'package:flutter/material.dart';

import 'package:notebook/add_noteboook.dart';
import 'package:notebook/data.dart';
import 'package:notebook/pages.dart';

class Notebook extends StatelessWidget {
  Notebook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.endContained,
      body: Padding(
          padding: EdgeInsets.all(10),
          child: SingleChildScrollView(
            child: Column(children: [
              // FloatingActionButton.small(
              //   onPressed: () {
              //     Navigator.pop(
              //       (context) =>
              //     )
              //     // Add your onPressed code here!
              //   },
              //   child: const Icon(Icons.arrow_back),
              // ),
              const Text(
                "NoteBooks",
                style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.w800,
                    color: Colors.red),
              ),
              SingleChildScrollView(
                child: Column(
                  children:
                      notebookdata.map<Widget>((Map<String, String> item) {
                    return Card(
                        child: ListTile(
                      title: Text(item["name"] ?? ""),
                      subtitle: Text(
                          'Date: ${item['date'] ?? ''}, Pages: ${item['Total_pages'] ?? ''}'),
                      onTap: () {
                        Navigator.push(context,
                            MaterialPageRoute(builder: (context) => Pages()));
                      },
                    ));
                  }).toList(),
                ),
              ),
            ]),
          )),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          // Add your onPressed code here!
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => AddNotebook()));
        },
        label: const Text('Add'),
        icon: const Icon(Icons.add),
      ),
    );
  }
}
